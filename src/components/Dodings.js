import React,{Component} from 'react';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

class Dodings extends Component {
    state = {
        dodings:[],
        currentDodings:[],
        currentPage:null,
        totalPages:null,
        loading:true
    }

    componentDidMount() {
        fetch('https://moonshiny-stakes.000webhostapp.com/doding/dodings')
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState({
                    dodings:result,
                    loading:false
                });
            });
    }
    onPageChanged = data => {
        const { dodings } = this.state;
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentDodings = dodings.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentDodings, totalPages });
    };



    render() {
        const {
            dodings,
            currentDodings,
            currentPage,
            totalPages,
            loading
        } = this.state;
        const headers = [
            { key: 'no', label: 'No'},
            { key: 'kategori', label: 'Kategori' },
            { key: 'judul', label: 'Judul' }
        ];
        const totalDodings = dodings.length;
        if(totalDodings===0) return null;
        const headerClass = [
            'text-dark py-2 pr-4 m-0',
            currentPage?'border-gray border-right':''
        ].join(' ').trim();
        let content;
        if(loading){
            content= <div>Loading....</div>;
        }else{
            content =  <div className="row d-flex flex-row py-5">
                    <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <h2 className={headerClass}>
                                <strong className="text-secondary">{totalDodings}</strong>{' '}
                                Dodings
                            </h2>
                            {
                                currentPage && (
                                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                                    Page <span className="font-weight-bold">{currentPage}</span> / {' '}
                                    <span className="font-weight-bold">{totalPages}</span>
                                </span>
                            )}
                        </div>
                        <div className="d-flex flex-row py-4 align-items-center">
                            <Pagination
                            totalRecords={totalDodings}
                            pageLimit={20}
                            pageNeighbours={1}
                            onPageChanged={this.onPageChanged}
                            />
                        </div>
                    </div>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                            {
                                headers.map(function(h) {
                                    return (
                                        <th key = {h.key}>{h.label}</th>
                                    )
                                })
                            }
                              <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               currentDodings.map(function(item, key) {
                                return (
                                    <tr key = {key}>
                                      <td>{item.no}</td>
                                      <td>{item.kategori}</td>
                                      <td>{item.judul}</td>
                                      <td style={{width:'100px'}}>
                                       <Link to={`/detail/${item.no}`} className="btn btn-dark btn-block">Detail</Link>
                                      </td>
                                    </tr>
                                                )
                                }.bind(this))
                            }
                        </tbody>
                    </table>
                </div>;

        }
        return (
            <div className="container mb-5">
                {content}
            </div>
        )
    }
}

export default Dodings;
