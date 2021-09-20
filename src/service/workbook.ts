import * as XLSX from 'xlsx';

const file: XLSX.WorkSheet = XLSX.readFile('./trackfy-api.xlsx')

const [Areas, Professions, Collaborators , Data] = file.SheetNames

const DataWorkSheet = file.Sheets[Data]

export interface FileProps {
  areas: string;
  professions: string;
  colaborators: string;
  data: DataProps
}

export interface DataProps {
  date: string;
  colaborator: string;
  profession: string;
  areas: string;
  workingHours: string;
}

const DataSheetJson: DataProps[]  = XLSX.utils.sheet_to_json<DataProps>(DataWorkSheet, {
  header: ['Date', 'Collaborator', 'Professions', 'Area', 'Working Hours'],
  raw: true,
  rawNumbers: true
})

export default DataSheetJson;