import { colorOptions } from '/src/js/utils/mock.js';
import { $ } from '../../@shared/utils/dom.js';

const subwayLineColorOptionTemplate = (color, index) => {
  const hasNewLine = (index + 1) % 7 === 0;
  return `<button type="button" class="color-option bg-${color}"></button> ${hasNewLine ? '<br/>' : ''}`;
};

const $subwayLineColorSelector = $('.subway-line-color-selector');

$subwayLineColorSelector.innerHTML = colorOptions.map(subwayLineColorOptionTemplate).join('');
