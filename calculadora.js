calculadora-de-partidas-rankeadas
Desafio DIO def calcular_nivel(vitórias, derrotas): saldo_vitorias = vitórias - derrotas

if vitorias < 10:
    nivel = "Ferro"
elif 11 <= vitorias <= 20:
    nivel = "Bronze"
elif 21 <= vitorias <= 50:
    nivel = "Prata"
elif 51 <= vitorias <= 80:
    nivel = "Ouro"
elif 81 <= vitorias <= 90:
    nivel = "Diamante"
elif 91 <= vitorias <= 100:
    nivel = "Lendário"
elif vitorias >= 101:
    nivel = "Imortal"
else:
    nivel = "Nível Indefinido"

return saldo_vitorias, nivel
Exemplo de uso da função
vitorias_jogador = int(input("Digite o número de vitórias: ")) derrotas_jogador = int(input("Digite o número de derrotas: "))

saldo, nível = calcular_nivel(vitorias_jogador, derrotas_jogador)

mensagem_saida = f"O jogador tem um saldo de {saldo} e está no nível de {nivel}" print(mensagem_saida)