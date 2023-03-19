export const responsive = () => {
    window.addEventListener("resize", (e: Event) => {
        const pixelRatio = window.devicePixelRatio;
        const zoomPixelRatio = window.visualViewport?.scale;
        if (pixelRatio && zoomPixelRatio) {
            document
                .querySelector("html")
                ?.style.setProperty(
                    "--zoom--scale",
                    String(zoomPixelRatio / pixelRatio)
                );
        }
    });
};
