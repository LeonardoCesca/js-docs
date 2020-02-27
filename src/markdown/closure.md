---
title: "Closure"
subtitle: Closure é quando uma função é capaz de lembrar e acessar seu escopo léxico, mesmo quando essa função está sendo executada fora do seu escopo léxico.
infos: Mais conteúdo
explanation: "Analisando mais detalhadamente o código acima será possível compreender melhor o conceito de closure. A função bar() tem acesso léxico ao escopo interno de foo(). Ao executar foo(), é atribuído o valor retornado para a variável chamada baz e então, é invocado baz(), que certamente está invocando a função interna bar(), apenas com um identificador diferente. Em virtude de onde foi declarada, bar() tem uma closure sobre o escopo interno de foo(), que mantem esse escopo vivo para bar() fazer referência a qualquer momento posterior. bar() ainda possui uma referência para esse escopo, e essa referência é chamada de closure."
date: 2020-02-26

---
