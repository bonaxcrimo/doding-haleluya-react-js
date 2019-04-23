import React from 'react';

class Dodings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dodings: []};
        this.headers = [
            { key: 'no', label: 'No'},
            { key: 'kategori', label: 'Kategori' },
            { key: 'judul', label: 'judul' }
        ];
    }

    componentDidMount() {
        fetch('http://localhost:81/ciApi/doding/dodings')
            .then(response => {
                return response.json();
            }).then(result => {
                console.log(result);
                this.setState({
                    dodings:result
                });
            });
    }



    render() {
        return (
            <div id="container">
                <table>
                    <thead>
                        <tr>
                        {
                            this.headers.map(function(h) {
                                return (
                                    <th key = {h.key}>{h.label}</th>
                                )
                            })
                        }
                          <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.dodings.map(function(item, key) {
                            return (
                                <tr key = {key}>
                                  <td>{item.no}</td>
                                  <td>{item.kategori}</td>
                                  <td>{item.judul}</td>
                                  <td>
                                  </td>
                                </tr>
                                            )
                            }.bind(this))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Dodings;