window.onload = () => {
  const inner = document.getElementById('inner');
  const tracker = document.getElementById('tracker');

  const delta = 10;

  let innerWidthNum, percentage;

  let interval = setInterval(() => {
    innerWidthNum = inner.style.width.slice(0, inner.style.width.length - 1);
    percentage = +innerWidthNum + delta + '%';

    tracker.innerHTML = percentage;
    inner.style.width = percentage;
    
    if (inner.style.width === '100%') clearInterval(interval);
  }, 500)
};