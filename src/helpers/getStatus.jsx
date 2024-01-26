const getStatus = (status) =>{
    switch (status){
        case 'important':
            return <span className="badge p-2 bg-danger">Önemli</span>;
        case 'job':
            return <span className="badge p-2 bg-warning">İş</span>;
        case 'daily':
            return <span className="badge p-2 bg-primary">Günlük</span>;
        default:
            return <span className="badge p-2 bg-secondary">Varsayılan</span>
    }
};

export default getStatus;