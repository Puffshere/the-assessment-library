export const detectOSMixin = {
    methods: {
      detectOperatingSystem() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
        }
        if (/android/i.test(userAgent)) {
          return "Android";
        }
        if (/windows/i.test(userAgent)) {
          return "Windows";
        }
        return "other";
      },
      setUnlockImage(imgElement, iosSrc, webpSrc) {
        if (imgElement) {
          const os = this.detectOperatingSystem();
          if (os === "iOS") {
            imgElement.src = iosSrc;
          } else {
            imgElement.src = webpSrc;
          }
        } else {
          console.error("Image element not found.");
        }
      }
    }
  };