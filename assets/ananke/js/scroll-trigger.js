
const trigger = new ScrollTrigger.default({
  trigger: {
    once: false,
    offset: {
      element: {
        x: 0,
        y: (trigger, rect, direction) => { return 0.2 }
      },
      viewport: {
        x: 0,
        y: (trigger, frame, direction) => { return trigger.visible ? 0 : 0.2 }
      }
    },
    toggle: {
      class: {
        in: 'visible', // Either a string, or an array of strings
        out: ['invisible']
      },
      callback: {
        in: null,
        visible: null,
        out: null,
      }
    }
  }
});

trigger.add('[data-slideInLeft] *')
       .add('[data-slideInRight] *')
       .add('[data-slideInBottom] *')
       .add('[data-slideInBothSides] *');

const trigger_immediate = new ScrollTrigger.default({
  trigger: {
    offset: {
      element: { x: 0, y: 0.1, },
      viewport: { x: 0, y: 0.1, }
    },
    toggle: {
      class: {
        in: 'visible',
        out: 'invisible'
      }
    }
  }
});

trigger.add('[data-slideInLeftImmediate] *')
       .add('[data-slideInRightImmediate] *')
       .add('[data-slideInBottomImmediate] *')
       .add('[data-slideInBothSidesImmediate] *');
