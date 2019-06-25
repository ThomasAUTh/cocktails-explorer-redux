import * as React from 'react'
import CocktailsList from './CocktailsList'
import { connect } from 'react-redux'

class CocktailsListContainer extends React.Component {
    selectCocktail(id) {
        console.log('selected cocktail:', id)
    }

    render() {
        return <CocktailsList cocktails={this.props.cocktails} selectCocktail={this.selectCocktail} />
    }
}

const mapStateToProps = (state) => {
    return {
        cocktails: state
    }
}

export default connect(mapStateToProps)(CocktailsListContainer)