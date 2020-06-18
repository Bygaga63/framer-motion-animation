Проект сделан с использоваение библиотеки framer-motion:
[link](https://www.framer.com/api/motion/examples/)

Свойста motion компонентов.
* initial - from
* animate - to
* whileHover - когда наводишь на элемент
* exit - анимация когда компонент исчезает

свойства transition:
```
transition: {
  type: "spring",//тип анимации (tween, spring и тд)
  mass: 0.4, // тяжесть компонента 
  damping: 8,
  when: "beforeChildren", //сделать анимацию у детей после родительской
  staggerChildren: 0.4, //для каждого ребенка анимация с задержкой 0.4 секунды
  duration: 0.3,
  yoyo: Infinity, //сколько раз применять остальные анимации
}
```

AnimatePresence - оборачивает динамический(появляется, исчезает) элемент которой будет анимирован 
```
<AnimatePresence>
  {showTitle && (
    <motion.h2 exit={{ y: -1000 }}>Thank for order :)</motion.h2>
  )}
</AnimatePresence>
```

Пока компонент не исчезнет, второй компонент не появится, удобно при переходах между страницами.
```
  <AnimatePresence exitBeforeEnter>
  </AnimatePresence>
```