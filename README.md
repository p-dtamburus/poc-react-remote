Run npm i then npm start to run the application


sendbird_desk_agent_id_ba1494bf-54b1-491f-b0d0-04efe1e22c41
2da6130d3d4094014ff0ac83b030d28a7120d791


g

sendbird_desk_agent_id_be1d06c9-f95f-453d-b3fe-c057ccf48a77
d2d998a3c1c54aba1e1d8b4dc41bd87b943a0b66




#comments

   remoteEntry: 'https://poc-react-remote.netlify.app/remoteEntry.js',
+  remoteEntry: 'http://localhost:3002/remoteEntry.js',


   appId={'546ABAB3-6E78-4A6A-A13E-69AA3EE8BC72'}
   userId={'sendbird_desk_agent_id_ba1494bf-54b1-491f-b0d0-04efe1e22c41'}
   accessToken={'2da6130d3d4094014ff0ac83b030d28a7120d791'}


api token **IMPORTANTE quando subir isso em qualquer ambiente, a chamada pra pegar o token do sendbird deve ser feito via backend, apitoken não
pode ser exposto no front!
90531da25be30e04eda270164101a31365a40766


   apiKey: 11cd8563ee3c445fa7faca3a

ver se tem como eu rodar outro front em outra porta e tentar colocar um usuário diferente localhost mesmo, pra ver como
seria o comportamento

explorar questões de tema cores responsividade e outras features do chat.



   ]Principais QUestões a investigar:
Autenticação:
   será possível usar usuários do cognito autenticados e criar on-the-fly caso o usuário não exista ou teremos que criar cada usuário manualmente mandando um e-mail para cada cliente que quiser usar o chat? daí teríamos que puxar o userId dele quando ele logar na aplicação e via backend pegar o session.










