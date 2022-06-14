import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState ('');
  
 let frases = [
  'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
  'Uma bela flor é incompleta sem as suas folhas.',
  'Sem o fogo do entusiasmo, não há o calor da vitória.',
  'O riso é a menor distância entre duas pessoas.',
  'Os defeitos são mais fortes quando o amor é fraco.',
  'Amizade e Amor são coisas que se unem num piscar de olhos.',
  'Surpreender e ser surpreendido é o segredo do amor.',
  'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.',
  'A paciência na adversidade é sinal de um coração sensível.',
  'A sorte favorece a mente bem preparada.',
  'A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.',
  'Quem olha para fora sonha; quem olha para dentro acorda.',
  'As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.',
  'Espere pelo mais sábio dos conselhos: o tempo.',
  'Todas as coisas são difíceis antes de se tornarem fáceis.',
  'Se você se sente só é porque construiu muros ao invés de pontes.',
  'Vencer é 90% suor e 10% de engenho.',
  'O amor está sempre mais próximo do que você imagina.',
  'Você é do tamanho do seu sonho.',
  'Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.',
  'O conhecimento é a única virtude e a ignorância é o único vício.',
  'O nosso primeiro e último amor é… o amor-próprio.',
  'Deixe de lado as preocupações e seja feliz.',
  'A vontade das pessoas é a melhor das leis.',
  'Nós somos o que pensamos.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.',
  'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.',
  'O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.',
  'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
  'O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.',
  'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.',
  'A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.',
  'Motivação não é sinónimo de transformação, mas um passo em sua direção.',
  'O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.',
  'A inspiração vem dos outros. A motivação vem de dentro de nós.',
  'Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.',
  'A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!',
  'Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..',
  'Acredite em milagres, mas não dependa deles.',
  'Você sempre será a sua melhor companhia!',
  'Realize o óbvio, pense no improvável e conquiste o impossível.'
 ];

function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ');
    setImg(require('./src/biscoitoAberto.png'));
}

function reiniciar (){
  setImg(require('./src/biscoito.png'));
  setTextoFrase('');
}

  return (
    <View style={styles.containerMae}>
      
     <Image
     source={img}
     style={styles.img}
     />
     
    <Text style={styles.textoFrase}> {textoFrase} </Text>

    <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
      <View style={styles.btnArea}>
        <Text style={styles.btnTexto}>quebrar biscoito</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' } ]} onPress={ reiniciar }>
      <View style={styles.btnArea}>
        <Text style={[styles.btnTexto, {color: '#121212'}]}>Reiniciar biscoito</Text>
      </View>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  containerMae: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
img:{
  width: 230,
  height: 230,
},
textoFrase:{
  fontSize: 20,
  color: '#dd7b22',
  margin: 30,
  fontStyle: 'italic',
  textAlign: 'center'
},
botao:{
  width: 230,
  height: 50,
  borderColor: '#dd7b22',
  borderWidth: 2,
  borderRadius: 25,
},
btnArea:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},
btnTexto:{
  fontSize: 17,
  color: '#dd7b22',
  fontWeight: 'bold'
},


});
