const {
  getRunningQueries,
} = require('../../../lib/infrastructure/database-stats-repository');
const { expect, sinon } = require('../../test-helper');

describe('database-stats-repository', () => {
  describe('#getRunningQueries', () => {
    it('should call scalingoApi.getRunningQueries and return result', async () => {
          // given
          const scalingoApp = 'application';
          const  getRunningQueriesStub = sinon.stub();
          getRunningQueriesStub.resolves({ queriesCount: 1})
          const scalingoApi = { getRunningQueries : getRunningQueriesStub};

          // when
          const response = await getRunningQueries(scalingoApi, scalingoApp);

          // then
          expect(getRunningQueriesStub).to.have.been.calledOnceWithExactly(scalingoApp);
          expect(response).to.deep.equal({ queriesCount: 1});
    });
  });
});
