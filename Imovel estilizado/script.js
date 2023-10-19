

document.addEventListener('DOMContentLoaded', function() {
    const radioCasa = document.getElementById('radio-casa');
    const radioAp = document.getElementById('radio-ap');
    const andarInput = document.getElementById('andar');
    andarInput.style.display = 'none';
    radioAp.addEventListener('change', function() {
      if (radioAp.checked) {
        andarInput.style.display = 'block'; 
      } else {
        andarInput.style.display = 'none'; 
      }
    });
    radioCasa.addEventListener('change', function() {
        if(radioCasa.checked) {
            andarInput.style.display = 'none'
        } else {
            andarInput.style.display ='block'
        }
    })
  });
var teste = () => {
    let casa = document.getElementById('radio-casa').checked;
    let ap = document.getElementById('radio-ap').checked;
  
    let quartos = parseFloat(document.getElementById('quartos').value);
    let metragem = parseFloat(document.getElementById('metragem').value);
    let preco_metro = parseFloat(document.getElementById('preco').value);
    let andar = parseFloat(document.getElementById('andar').value);
  
    let preco = 0;
    
    if (casa) {
        
      switch (quartos) {
        case 1:
          preco = metragem * preco_metro;
          break;
        case 2:
          preco = metragem * (preco_metro * 1.2);
          break;
        case 3:
          preco = metragem * (preco_metro * 1.5);   
          break;
        case 4: 
          preco = metragem * (preco_metro * 2.0);
          break;
        default:
          alert(`Não está disponível ${quartos} quartos, somente até 4!`);
      }
      return resultado.innerHTML = `Preço final é ${preco.toFixed(2)}`
    } else if (ap) {
        
        if(andar == 0) {
            andar = 2;
        }
        switch (quartos) {
            case 1:
                preco = metragem * (preco_metro * 1.0 * (andar / 1.2));
              break;
            case 2:
                preco = metragem * (preco_metro * 1.2 * (andar / 1.2));
              break;
            case 3:
                preco = metragem * (preco_metro * 1.5 * (andar / 1.2));
              break;
            case 4: preco = metragem * (preco_metro * 2.0 * (andar / 1.2));
                break;
            default:
              alert(`Não está disponível ${quartos} quartos, somente até 4!`);
          }
      
          return resultado.innerHTML = `Preço final é ${preco.toFixed(2)}`
    }
  }
  