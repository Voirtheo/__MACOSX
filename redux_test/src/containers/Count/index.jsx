import CountUI from '../../components/Count'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count_action'



export default connect(
    state => ({ 
        count: state.sum,
        numberOfPeople:state.people.length
     }),
    {
        incre: createIncrementAction,
        decre: createDecrementAction,
        increAsync: createIncrementAsyncAction
    }
)(CountUI)
