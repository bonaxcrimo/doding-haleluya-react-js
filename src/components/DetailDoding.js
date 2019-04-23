import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class DetailDoding extends Component {
    state = {
        no:'',
        kategori:'',
        judul:'',
        lirik:''
    }
    componentDidMount(){
        fetch('http://localhost:81/ciApi/doding/doding?no=' + this.props.match.params.no)
        .then(response => {
            return response.json();
        }).then(result => {
            console.log(result);
            this.setState({
                no:result.no,
                kategori:result.kategori,
                judul:result.judul,
                lirik:result.lirik
            });
        });
    }
    render(){
        const {
            judul,kategori,lirik,no
        } = this.state;
        return(
        <div className="container mb-5">
            <div className="row d-flex flex-lg-row py-5 justify-content-center">
                <div className="mr-auto">
                    <Link to={`/`} className="btn btn-warning">Kembali</Link>
                </div>
                <div className="card ">
                  <div class="card-header">
                    <div className="px-3">
                          <h2 className="text-dark py-2 pr-4 m-0">
                            <strong className="text-secondary">{no}</strong>{'. '}{judul}
                          </h2>
                          <span className="country-region text-secondary text-uppercase">
                            {kategori}
                          </span>
                    </div>
                  </div>
                  <div class="card-body" dangerouslySetInnerHTML={ {__html: lirik} }>
                  </div>
                </div>
                <div className="ml-auto">
                Same Category
                </div>
            </div>
        </div>
        )
    }
}

export default DetailDoding;