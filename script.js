const preventDefaultOnWheel = (dom) => {
  dom.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
    },
    { passive: false }
  );
};

const onGetMutation = (mutation) => {
  Array.from(mutation.target.querySelectorAll('input[type="number"]')).forEach(
    (dom) => {
      preventDefaultOnWheel(dom);
    }
  );
};

const initObserver = () => {
  const target = document.body;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      onGetMutation(mutation);
    });
  });

  const config = {
    childList: true,
    subtree: true,
  };

  observer.observe(target, config);
};

Array.from(document.body.querySelectorAll('input[type="number"]')).forEach(
  (dom) => {
    preventDefaultOnWheel(dom);
  }
);

initObserver();
