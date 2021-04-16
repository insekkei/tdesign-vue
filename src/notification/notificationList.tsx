import Vue from 'vue';
import Notification from './notification';
import { TdNotificationProps, NotificationOptions } from '@TdTypes/notification/TdNotificationProps';
import { DEFAULT_Z_INDEX, PLACEMENT_OFFSET, DISTANCE } from './const';

export default Vue.extend({
  components: { Notification },
  props: {
    placement: {
      type: String,
      default: 'top-right',
      validator(v: string): boolean {
        return (
          [
            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right',
          ].indexOf(v) > -1
        );
      },
    },
  },
  data() {
    return {
      list: [],
    };
  },
  computed: {
    styles(): Styles {
      return {
        zIndex: DEFAULT_Z_INDEX,
        ...PLACEMENT_OFFSET[this.placement],
      };
    },
  },
  methods: {
    add(options: TdNotificationProps): number {
      this.list.push(options);
      return this.list.length - 1;
    },
    remove(index: number) {
      this.list.splice(index, 1);
    },
    removeAll() {
      this.list = [];
    },
    getOffset(val: string | number) {
      if (!val) return;
      return isNaN(Number(val)) ? val : `${val}px`;
    },
    notificationStyles(item: { offset: NotificationOptions['offset']; zIndex: number }) {
      const styles: Styles = {
        marginBottom: DISTANCE,
      };
      if (item.offset) {
        styles.position = 'relative';
        styles.left = this.getOffset(item.offset[0]);
        styles.top = this.getOffset(item.offset[1]);
      }
      if (item.zIndex) styles['z-index'] = item.zIndex;
      return styles;
    },
    getListeners(index: number) {
      return {
        'click-close-btn': () => this.remove(index),
        'duration-end': () => this.remove(index),
      };
    },
  },
  render() {
    if (!this.list.length) return;
    return (
      <div class={`t-notification__show--${this.placement}`} style={this.styles}>
        {this.list
          .map((item, index) => (
            <t-notification
              key={item.id}
              style={this.notificationStyles(item)}
              {...{ props: item }}
              {...{ on: this.getListeners(index) }}
            />
          ))
        }
      </div>
    );
  },
});
