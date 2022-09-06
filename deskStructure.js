import S from '@sanity/desk-tool/structure-builder';
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list';

export default () =>
  S.list()
    .title('Content')
    .items([orderableDocumentListDeskItem({type: 'project', title: 'Order Projects'}), ...S.documentTypeListItems()]);
