# Produtor-Consumidor com Redis

Este projeto implementa o problema clássico **Produtor-Consumidor** utilizando Redis como cache e intermediário para troca de mensagens. Redis atua como uma fila de mensagens para sincronizar as operações entre o produtor e o consumidor, garantindo que as mensagens sejam trocadas de forma eficiente e em tempo real.

### Descrição do Problema

No problema Produtor-Consumidor, temos dois agentes principais:

- **Produtor**: gera dados e os insere em uma fila.
- **Consumidor**: lê e processa os dados da fila.

### Executando o Produtor

Para iniciar o produtor, siga estes passos:

1. Execute o script do produtor:
   ```bash
   cd src
   node produtor.js
   ```

### Executando o Consumidor

Para iniciar o consumidor, siga estes passos:

1. Execute o script do consumidor:
   ```bash
   cd src
   node consumidor.js
   ```

### Funcionamento

1. O **produtor** insere dados na fila Redis em intervalos definidos.
2. O **consumidor** monitora a fila Redis e, sempre que um novo dado é inserido, o consome e processa, removendo-o da fila.
3. Redis atua como o intermediário, garantindo que o consumidor só acesse os dados quando o produtor os disponibilizar.
