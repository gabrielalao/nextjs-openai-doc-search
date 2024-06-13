import { SearchDialog } from './components/SearchDialog'

export default {
  logo: <span>Product Docs</span>,
  project: {
    link: 'https://github.com/devzero-inc',
  },
  navbar: {
    extraContent:  <SearchDialog />
  },
  // ... other theme options
}
