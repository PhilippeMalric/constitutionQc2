export class VariablesShort{
  name: string
  label: string
  type: string
  study: string
  dataset: string
  words: string[]

    constructor(
        name: string,
        label: string,
        type: string,
        study: string,
        dataset: string,
        words: string[]
    ){
      this.name = name
      this.label = label
      this.type = type
      this.study = study
      this.dataset = dataset
      this.words = words

    }



}
