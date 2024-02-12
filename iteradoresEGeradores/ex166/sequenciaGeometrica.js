/*IMplemente um gerador que produza uma sequencia geometrica*/

function *sequenciaGeometrica(a, r, n){
    for (let i = 0;i < n;i++){
        yield a;
        a *= r;
    }
}

const sequencia = sequenciaGeometrica(1,2,5);
console.log([...sequencia]);