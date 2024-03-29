import S from '@sanity/desk-tool/structure-builder';
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list';
import {ReferencedByView} from 'part:@indent-oss/sanityio-referenced-by';

export const getDefaultDocumentNode = () => {
  return S.document().views([S.view.form(), S.view.component(ReferencedByView).title('Referenced by')]);
};

export default () =>
  S.list()
    .title('Content')
    .items([orderableDocumentListDeskItem({type: 'project', title: 'Order Projects'}), ...S.documentTypeListItems()]);
