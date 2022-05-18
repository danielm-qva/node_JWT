import getExpeditiousCache from 'express-expeditious'

const cache = getExpeditiousCache({
  namespace: 'expresscache',
  defaultTtl: '15 seconds'
}); 

   export default cache ;
