import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Juego extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'monitor'})
  public monitor: number

  @column({ columnName: 'turno'})
  public turno: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
