import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  useSubtotalAmount,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const {amount,currencyCode} = useSubtotalAmount();
  const wysePoints = Math.ceil((amount * 0.06).toFixed(2));

  return (
    <Banner title="Reward Points">
      {`You will earn up to ${wysePoints} Wyse points with this purchase`}
      {/* {translate('welcome', {target: extension.target})} */}
    </Banner>
  );
}