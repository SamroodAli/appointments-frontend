import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import redux from '../redux';

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(redux.actionCreators, dispatch);
};

export default useActions;
