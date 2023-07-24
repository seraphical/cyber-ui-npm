  <script>
import { Table as ElTable } from 'element-ui';

export default {
  name: 'CyTable',
  components: { ElTable },
  data() {
    return {};
  },
  props: {
    data: {},
    columns: {},
    pageNum: {},
    pageSize: {},
    pageSizes: {},
    layout: {},
    isPagination: {},
  },

  // link,tag
  methods: {
    slot() {
      return this.columns.map((item) => {
        return h();
      });
    },
  },
  render: (h) => {
    return h(ElTable, {}, this.slot);
  },
};
</script>