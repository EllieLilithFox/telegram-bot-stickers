import $ from 'jquery'
import { showSpinner, hideSpinner } from '../js/helper-funcs'

describe('helper-funcs', () => {
  test('should call showSpinner and show spinner and disable button', () => {
    document.body.innerHTML = `
    <div class="spinner-border text-primary ml-2" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <input type="submit" class="btn btn-primary mb-3" id="addStickerButton" />`

    const button = $('#addStickerButton')
    const spinner = $('.spinner-border')
    showSpinner(button)

    expect(spinner.css('display')).toBe('block')
    expect(button.hasClass('disabled')).toBe(true)
  })

  test('should call hideSpinner and hide spinner and enable button', () => {
    document.body.innerHTML = `
    <div class="spinner-border text-primary ml-2" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <input type="submit" class="btn btn-primary mb-3" id="addStickerButton" />`

    const button = $('#addStickerButton')
    const spinner = $('.spinner-border')
    hideSpinner(button)

    expect(spinner.css('display')).toBe('none')
    expect(button.hasClass('disabled')).toBe(false)
  })
})
