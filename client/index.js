window.onload = () => {
  const inner = document.getElementById('inner');
  const tracker = document.getElementById('tracker');

  let interval = setInterval(() => {
    let innerWidth = inner.style.width.slice(0, inner.style.width.length - 1);
    let percentage = +innerWidth + 10 + '%';

    tracker.innerHTML = percentage;
    inner.style.width = percentage;
    
    if (inner.style.width === '100%') clearInterval(interval);
  }, 500)
};