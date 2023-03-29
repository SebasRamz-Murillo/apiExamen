import { Response } from '@adonisjs/core/build/standalone';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import Ws from 'App/Services/Ws'
import Database from '@ioc:Adonis/Lucid/Database'
import Ws from 'App/Services/Ws'

export default class JuegosController {
  public async monitoresDisponibles ({response }) {
    const _ = require('lodash');
    const monitoresTotal = [1,2,3,4,5,6,7,8,9,10];
    const monitoresUsers = await (await Database
      .from('users')
      .select('monitor'))
      .map(row => row.monitor);
    const monitoresFaltantes = _.difference(monitoresTotal, monitoresUsers);
    Ws.io.emit('monitores', monitoresFaltantes);
    response.send(monitoresFaltantes)
  }

  //juego de un barquito, dependiendo de el monitor, es el orden en que se va a ir viendo el barco(tres numeros:1 para barco entero, 2 para la mitad izquierda, 3 para la mitad derecha) con websocker
  public async barquito ({ request, response, auth }) {

    const monitor = request.input('monitor')

  }






}
