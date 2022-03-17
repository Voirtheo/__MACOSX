import CountUI from '../../components/Count'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'



export default connect(
    state => ({ count: state }),
    {
        incre: createIncrementAction,
        decre: createDecrementAction,
        increAsync: createIncrementAsyncAction
    }
)(CountUI)
