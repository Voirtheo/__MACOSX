import CountUI from '../../components/Count'
import { connect } from 'react-redux'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action'


function mapStateToProps(state) {
    return { count: state }
}
function mapDispatchToProps(dispatch) {
    return {
        incre: number => dispatch(createIncrementAction(number)),
        decre: number => dispatch(createDecrementAction(number)),
        increAsync:number =>dispatch(createIncrementAsyncAction(number,500))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
