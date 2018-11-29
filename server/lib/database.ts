
import * as mongoose from 'mongoose';

const server = 'localhost'; // REPLACE WITH YOUR DB SERVER
const database = 'fcc-Mail';      // REPLACE WITH YOUR DB NAME


class Database{

  public db: mongoose.connec

  constructor(){
    this._connect();
  }

  private _connect(){
    mongoose.Promise = global.Promise();
    mongoose.connect(`mongodb://${server}/${database}`)
    .then(() => {
      console.log('Database connection successful')
    })
    .catch(err => {
      console.error('Database connection error')
    });
    
  }

}

export default new Database();
