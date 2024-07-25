import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/js-dom/vitest'

afterEach(() => {
  cleanup()
})