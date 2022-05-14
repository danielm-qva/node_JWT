import getExpeditiousCache from 'express-expeditious'

const cache = getExpeditiousCache({
  namespace: 'expresscache',
  defaultTtl: '1 minute'
}); 

   export default cache ;
