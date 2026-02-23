/**
 * Composable for handling animation triggers when an element enters the viewport
 * @returns An object containing the template ref, reactive state, and computed CSS classes
 */
export function useAnimationInView() {
  const animationContainer = useTemplateRef<HTMLElement>("animationContainer");
  const isAnimationContainerInViewport = shallowRef(false);

  const animateFromBottom = computed(() => {
    return isAnimationContainerInViewport.value
      ? "animate-from-bottom"
      : "opacity-0";
  });

  const animateFromBottom20 = computed(() => {
    return isAnimationContainerInViewport.value
      ? "animate-from-bottom-20"
      : "opacity-0";
  });

  const animateBlurEntrance = computed(() => {
    return isAnimationContainerInViewport.value
      ? "animate-blur-entrance"
      : "opacity-0";
  });

  useIntersectionObserver(
    animationContainer,
    ([entry], observer) => {
      if (entry?.isIntersecting) {
        isAnimationContainerInViewport.value = true;
        observer?.disconnect();
      }
    },
    {
      threshold: 0.2,
    },
  );

  return {
    animationContainer,
    isAnimationContainerInViewport,
    animateFromBottom,
    animateFromBottom20,
    animateBlurEntrance,
  };
}
