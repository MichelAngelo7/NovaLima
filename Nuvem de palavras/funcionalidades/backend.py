import io
import requests
from pdfminer.high_level import extract_text
from nltk.tokenize import RegexpTokenizer
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from wordcloud import WordCloud
from matplotlib import pyplot as plt
from nltk.probability import FreqDist

"""
extrair_texto_pdf
Pode ser um pouco lenta devido a conexão 
com a internet.

"""
def extrair_texto_pdf(url):
    resposta = requests.get(url)
    with io.BytesIO(resposta.content) as abrir_pdf:
        text = extract_text(abrir_pdf)
        #text = text.rstrip().replace('\n', '').lower()
    return text    

def data_reuniao(url):
    pegar_data_reuniao = RegexpTokenizer('\-\d*\-\d*\-\d*')
    pegar_data_reuniao = pegar_data_reuniao.tokenize(url)
    return pegar_data_reuniao
    

def dados_ata(text):
    presentes = []
    
    with open('../Dados/Vereadores.txt','r',encoding='utf-8') as vereadores_txt:
        vereadores = vereadores_txt.read()

    with open('../Dados/Apelidos.txt','r',encoding='utf-8') as apelidos_txt:
        apelidos = apelidos_txt.read()
        
        
    for nomes in vereadores.split('\n'):  
            if nomes in text:
                if nomes not in presentes:
                    presentes.append(nomes)

    for apelido in apelidos.split('\n'):
                 if apelido in text:
                    if apelido not in presentes:
                         presentes.append(apelido)

    def houve_reuniao():
        if (len(presentes)> 8):
            return "Sim"
        else:
            return "Não"

    
    print(f"Número de Vereadores presentes: {len(presentes)} ")
    print(f"Lista com os Vereadores Presentes: {presentes}")
    print(f"Houve Reunião: {houve_reuniao()}")
    
    
def nuvem_palavras(data, title = None):
    wordcloud = WordCloud(background_color = 'white', max_words = 500, max_font_size=70).generate(str(data))
    fig = plt.figure(1, figsize=(20,20))
    plt.axis('off')
    plt.title(title, size = 25)
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.show()
    
    
def filtos(text):
    text = text.lower()
    tokens = word_tokenize(text)
    
    tokenizer_projetos2020 = RegexpTokenizer('\d*.\d*d*/\d*')
    numero_projetos2020 = tokenizer_projetos2020.tokenize(text)
    
    
    tokenizer_projetos2019 = RegexpTokenizer('\d*d*/\d*')
    numero_projetos2019 = tokenizer_projetos2019.tokenize(text)
    
    tokenizer_digit = RegexpTokenizer('^[ 0-9]+$')
    digitos = tokenizer_digit.tokenize(text)
    
    with open('../Dados/pontuacao.txt','r',encoding='utf-8') as pontuacao_txt:
        pontuacao = pontuacao_txt.read()
               
    with open('../Dados/stop_words_custom.txt', 'r', encoding='utf-8') as stop_words_custom_txt:
        stop_words_custom = stop_words_custom_txt.read()

    with open('../Dados/nomes_remover.txt','r',encoding='utf-8') as nomes_remover_txt:
        nomes_remover = nomes_remover_txt.read()

    stop_words = set(stopwords.words('portuguese'))
    
    resultado1 = [resultado for resultado in tokens if resultado not in stop_words]
    
    resultado2 = [resultado1 for resultado1 in resultado1 if resultado1 not in pontuacao]
    
    resultado3 = [resultado2 for resultado2 in resultado2 if resultado2 not in numero_projetos2020]
    
    resultado4 = [resultado3 for resultado3 in resultado3 if resultado3 not in numero_projetos2019]
    
    resultado5 = [resultado4 for resultado4 in resultado4 if resultado4 not in nomes_remover]
    
    resultado6 = [resultado5 for resultado5 in resultado5 if resultado5 not in stop_words_custom]
    
    return resultado6

def palavras_frequentes(resultado):
    
    with open('../Dados/pontuacao.txt','r',encoding='utf-8') as pontuacao_txt:
        pontuacao = pontuacao_txt.read()
        
    fd = FreqDist(resultado)
    pesquisar = [fd for fd, _ in fd.most_common(5) if fd not in pontuacao]
    return pesquisar