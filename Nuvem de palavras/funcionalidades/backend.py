import io
import requests
from pdfminer.high_level import extract_text
from nltk.tokenize import RegexpTokenizer
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from wordcloud import WordCloud
from matplotlib import pyplot as plt
from nltk.probability import FreqDist
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from bs4 import BeautifulSoup
import time

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
    return str(pegar_data_reuniao).replace('-','/')[3:11]
    

def dados_ata(text):
    presentes = []
    
    with open('../Dados/Vereadores.txt','r',encoding='utf-8') as vereadores_txt:
        vereadores = vereadores_txt.read()

    with open('../Dados/Apelidos.txt','r',encoding='utf-8') as apelidos_txt:
        apelidos = apelidos_txt.read()
            
        
    for nomes in vereadores.split('\n'):
        if nomes == "a presença de todos os vereadores":
            presentes.append(vereadores.split('\n'))
        else:    
            if nomes in text:
                if nomes not in presentes:
                    presentes.append(nomes)
            else:
                for apelido in apelidos.split('\n'):
                     if apelido in text:
                            if apelido == 'boi':
                                presentes.append('José Carlos de Oliveira')
                            if apelido == 'Alessandro  Coxinha':
                                presentes.append('Alessandro Luiz Bonifácio')
                            if apelido == 'Álvaro  Azevedo':
                                presentes.append('Álvaro Alonso Perez Morais de Azevedo')
                            if apelido == 'Fausto  Niquini':
                                    presentes.append('Fausto Niquini Ferreira')
                            if apelido == 'Wesley':
                                    presentes.append('Wesley de Jesus Silva')
                            

    def houve_reuniao():
        if (len(sorted(set(presentes)))> 8):
            return "Sim"
        else:
            return "Não"

    
    print(f"Número de Vereadores presentes: {len(sorted(set(presentes)))} ")
    print(f"Número de Vereadores ausentes: {10 - len(sorted(set(presentes)))} ")
    print(f"Lista com os Vereadores Presentes: {sorted(set(presentes))}")
    print(f"Houve Reunião: {houve_reuniao()}")
    
    
def nuvem_palavras(data, title = None):
    wordcloud = WordCloud(background_color = 'white', max_words = 500, max_font_size=70).generate(str(data))
    fig = plt.figure(1, figsize=(20,20))
    plt.axis('off')
    plt.title(title, size = 25)
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.show()
    #print(data) # remover 
    
    
def filtos(text):
    text = text.lower()
    tokens = word_tokenize(text)
    
    tokenizer_datas = RegexpTokenizer('\d*/\d*/\d*')
    datas_padrao = tokenizer_datas.tokenize(text)
     
    tokenizer_barra_digitos = RegexpTokenizer('\d*/\d*')
    barra_digitos = tokenizer_barra_digitos.tokenize(text)
    
    tokenizer_ponto_digitos = RegexpTokenizer('\d*\.\d*')
    ponto_digitos = tokenizer_ponto_digitos.tokenize(text)
    
    tokenizer_digito_ponto_barra = RegexpTokenizer('\d*.\d*/\d*')  
    digito_ponto_barra = tokenizer_digito_ponto_barra.tokenize(text)
    
    tokenizer_monetario = RegexpTokenizer('\d*.\d*,\d*.')  
    monetario = tokenizer_monetario.tokenize(text)
    
    tokenizer_ordinais_digitos = RegexpTokenizer('\d*\º')
    ordinais_digitos = tokenizer_ordinais_digitos.tokenize(text)   
        
    tokenizer_digit = RegexpTokenizer('\d*')
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
    
    resultado3 = [resultado2 for resultado2 in resultado2 if resultado2 not in datas_padrao]
    
    resultado4 = [resultado3 for resultado3 in resultado3 if resultado3 not in barra_digitos]
    
    resultado5 = [resultado4 for resultado4 in resultado4 if resultado4 not in ponto_digitos]
    
    resultado6 = [resultado5 for resultado5 in resultado5 if resultado5 not in digito_ponto_barra]
    
    resultado7 = [resultado6 for resultado6 in resultado6 if resultado6 not in ordinais_digitos]
    
    resultado8 = [resultado7 for resultado7 in resultado7 if resultado7 not in monetario]
    
    resultado9 = [resultado8 for resultado8 in resultado8 if resultado8 not in digitos]
    
    resultado10 = [resultado9 for resultado9 in resultado9 if resultado9 not in nomes_remover]
    
    resultado11 = [resultado10 for resultado10 in resultado10 if resultado10 not in stop_words_custom]
    
    return resultado11

def palavras_frequentes(resultado):
    
    with open('../Dados/pontuacao.txt','r',encoding='utf-8') as pontuacao_txt:
        pontuacao = pontuacao_txt.read()
        
    fd = FreqDist(resultado)
    pesquisar = [fd for fd, _ in fd.most_common(5) if fd not in pontuacao]
    return pesquisar

def diconario(pesquisar):
    
    url = 'https://www.dicio.com.br/'
    
    options = Options()
    options.headless = True
    driver = webdriver.Firefox()
    
    driver.get(url)
    time.sleep(5)
    
    significados = []
    
    for i  in pesquisar:
        driver.refresh()
        time.sleep(5)
        driver.get(url)
        time.sleep(5)
        campo_exercicio = driver.find_element_by_id("q")
        campo_exercicio.send_keys(i)
        time.sleep(5)
        comfirmar = driver.find_element_by_id('q')
        comfirmar.send_keys(u'\ue007')
        time.sleep(5)
        try:
            time.sleep(5)
            definicao = driver.find_element_by_xpath("//p[@class='significado textonovo']")
            conteudo_definicao = definicao.get_attribute('outerHTML')
            sopa = BeautifulSoup(conteudo_definicao, 'html.parser')
            p = sopa.find(name='p')
            significados.append(i)
            significados.append(p.get_text())
            time.sleep(5)
        except Exception:
            try:
                link = driver.find_element_by_link_text(i)
                link.click()
                time.sleep(5)
                definicao = driver.find_element_by_xpath("//p[@class='significado textonovo']")
                conteudo_definicao = definicao.get_attribute('outerHTML')
                sopa = BeautifulSoup(conteudo_definicao, 'html.parser')
                p = sopa.find(name='p')
                significados.append(i)
                significados.append(p.get_text())
                time.sleep(5)    
            except Exception:
                time.sleep(5)
                definicao = driver.find_element_by_xpath("//p[@class='significado']")
                conteudo_definicao = definicao.get_attribute('outerHTML')
                sopa = BeautifulSoup(conteudo_definicao, 'html.parser')
                p = sopa.find(name='p')
                significados.append(i)
                significados.append(p.get_text())
                time.sleep(5)
       
       
    
    
    driver.quit() 
    
    return significados