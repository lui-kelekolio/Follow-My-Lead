import React from 'react'
import { getDogs } from '../api/dogApi'
import {Link} from 'react-router-dom'

class DogList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            dogList: [],
        }
    }


    componentDidMount() {

        getDogs()
            .then(dogs => {

                this.setState({
                    dogList: dogs
                })
            })

        console.log(this.state.dogList)

    }

    render() {
        return (
            <div>
                {this.state.dogList.map(dog => {
                    return (
                        <div className='doglist'>
                            <img className='dogphoto' src={dog.photo} />
                           <Link to = {`/dog/${dog.id}`} >{dog.name}</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DogList