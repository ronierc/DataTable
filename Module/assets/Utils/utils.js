export const diferencaDatas = (d1, d2) => {
    let str1= d1.split('/'); //Transforma a data em vetor
    let str2 = '';

    //                yyyy   , mm       , dd
    let t1 = new Date(str1[2], str1[1]-1, str1[0]); //Coloca a data na ordem certa
    let t2 = '';
    
    if(d2 == null || d2 == ''){ //Se não receber a data 2, pega a data do dia
        t2 = new Date();
    } else {
        str2 = d2.split('/');
        t2 = new Date(str2[2], str2[1]-1, str2[0]);
    }

    return -Math.floor((t2-t1)/(24*3600*1000));
};


export const progressBar = (status) => {
    var perc = 0;
    var bgCor = '';
    if(status === 0 ){
        perc = 0;
        bgCor = 'default'
    }
    else if(status === 1 ){
        perc = 25;
        bgCor = 'warning'
    }
    else if(status === 2 ){
        perc = 50;
        bgCor = 'info'
    }
    else if(status === 3 ){
        perc = 100;
        bgCor = 'danger'
    }
    else if(status === 4 ){
        perc = 100;
        bgCor = 'success'
    }
return `
<div class="progress-showcase">
    <div class="progress sm-progress-bar">
        <div class="progress-bar bg-${bgCor}" role="progressbar" style="width: ${perc}%" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>
`;
}


const statusNome = (status) => {
    var situ = '';
    if(status === 0 ){ situ = 'Pendente' }
    if(status === 1 ){ situ = 'Aprovada' }
    if(status === 2 ){ situ = 'Iniciada' }
    if(status === 3 ){ situ = 'Cancelada' }
    if(status === 4 ){ situ = 'Finalizada' }
    return situ;
}   