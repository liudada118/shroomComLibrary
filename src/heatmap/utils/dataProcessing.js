const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

const to2D = (input) => {
  if (!input) return []
  if (Array.isArray(input[0])) return input
  const isArrayLike = Array.isArray(input) || ArrayBuffer.isView(input)
  const flat = isArrayLike ? input : []
  const size = Math.sqrt(flat.length)
  if (!Number.isInteger(size)) return []
  const output = []
  for (let r = 0; r < size; r++) {
    const row = []
    for (let c = 0; c < size; c++) {
      row.push(flat[r * size + c] ?? 0)
    }
    output.push(row)
  }
  return output
}

export function gaussianBlur(input2d, kernelSize = 5, sigma = 1.5) {
  const input = to2D(input2d)
  const height = input.length
  const width = input[0]?.length || 0
  if (!height || !width) return []

  const output = []
  const kernel = []
  const half = Math.floor(kernelSize / 2)
  let sum = 0

  for (let y = -half; y <= half; y++) {
    const row = []
    for (let x = -half; x <= half; x++) {
      const val = Math.exp(-(x * x + y * y) / (2 * sigma * sigma))
      row.push(val)
      sum += val
    }
    kernel.push(row)
  }

  for (let y = 0; y < kernelSize; y++) {
    for (let x = 0; x < kernelSize; x++) {
      kernel[y][x] /= sum
    }
  }

  for (let y = 0; y < height; y++) {
    const row = []
    for (let x = 0; x < width; x++) {
      let val = 0
      for (let ky = -half; ky <= half; ky++) {
        for (let kx = -half; kx <= half; kx++) {
          const py = clamp(y + ky, 0, height - 1)
          const px = clamp(x + kx, 0, width - 1)
          val += input[py][px] * kernel[ky + half][kx + half]
        }
      }
      row.push(val)
    }
    output.push(row)
  }

  return output
}

export function bilinearInterpolate(input2d, x, y) {
  const input = to2D(input2d)
  const height = input.length
  const width = input[0]?.length || 0
  if (!height || !width) return 0

  const x0 = Math.floor(x)
  const y0 = Math.floor(y)
  const x1 = Math.min(x0 + 1, width - 1)
  const y1 = Math.min(y0 + 1, height - 1)

  const xFrac = x - x0
  const yFrac = y - y0

  const v00 = input[y0][x0]
  const v10 = input[y0][x1]
  const v01 = input[y1][x0]
  const v11 = input[y1][x1]

  const v0 = v00 * (1 - xFrac) + v10 * xFrac
  const v1 = v01 * (1 - yFrac) + v11 * yFrac

  return v0 * (1 - yFrac) + v1 * yFrac
}

export function upscaleDataSmooth(input, targetSize = 256) {
  const source = to2D(input)
  const srcHeight = source.length
  const srcWidth = source[0]?.length || 0
  if (!srcHeight || !srcWidth) return new Float32Array(targetSize * targetSize)

  const blurred = gaussianBlur(source, 5, 1.2)
  const doubleBlurred = gaussianBlur(blurred, 3, 0.8)

  const output = new Float32Array(targetSize * targetSize)

  for (let y = 0; y < targetSize; y++) {
    for (let x = 0; x < targetSize; x++) {
      const srcX = (x / targetSize) * (srcWidth - 1)
      const srcY = (y / targetSize) * (srcHeight - 1)
      let val = bilinearInterpolate(doubleBlurred, srcX, srcY)
      val = clamp(val, 0, 255)
      output[y * targetSize + x] = val
    }
  }

  return output
}
