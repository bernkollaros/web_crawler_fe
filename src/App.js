import React, { Component } from 'react';

import {
    PrimaryButton,
    Grid, Cell,
} from './atoms';

import {
    ItemList,
} from './molecules';

import {
    Header,
    Footer,
} from './organisms';

import {fetch} from './api';

import './App.scss';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    onFetch() {
        fetch()
            .then(
                response => { console.log('>>>', response.data)
                    this.setState(
                    {data: response.data}
                )}
            )
    }

    onDelete() {
        this.setState({data: []})
    }

    render() {
        const data = this.state.data;
        return (
            <div className="App">
                <Grid
                    minHeight={'100vh'}
                    id={'layout'}
                    columns={'100px auto auto 100px'}
                    rows={'40px auto 40px'}
                    gap={'14px 0'}
                    areas={[
                        'header header header header',
                        'fetch main main delete',
                        'footer footer footer footer'
                    ]}
                >
                    <Cell
                        id={'header'}
                        area={'header'}
                        className={'Header'}
                    >
                        <Header/>
                    </Cell>
                    <Cell
                        id={'fetch'}
                        area={'fetch'}
                    >
                        <PrimaryButton
                            id={'mainBtn'}
                            onClick={()=> this.onFetch()}
                            text={'Fetch'}
                            className={'MainBtn'}
                        />
                    </Cell>
                    <Cell id={'main'} area={'main'}>
                        {data && <ItemList data={data}/>}
                    </Cell>
                    <Cell
                        id={'delete'}
                        area={'delete'}
                    >
                        <PrimaryButton
                            id={'mainBtn'}
                            onClick={()=> this.onDelete()}
                            text={'Delete'}
                            className={'MainBtn'}
                        />
                    </Cell>
                    <Cell
                        id={'footer'}
                        area={'footer'}
                    >
                        <Footer/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default App;

