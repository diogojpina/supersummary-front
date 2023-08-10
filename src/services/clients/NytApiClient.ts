import axios from 'axios'

class NytApiClient {
  public async DoRequest (method='GET', endpoint: string, data = {}, aditionalHeaders:any = {}) {
    const url = `${this.getBaseUri()}${endpoint}`
    const headers: any = {}
    headers['Content-Type'] = 'application/json'
    headers.Accept = 'application/json'

    for (const idx in aditionalHeaders) {
      headers[idx] = aditionalHeaders[idx]
    }
    
    const requestConfig: any = {
      method,
      headers,
      crossdomain: true,
      url,
      data
    }

    const response = await axios(requestConfig)

    if (response.data && response.data.status === 'error') {
      throw new Error('Legacy API status error')
    }
    
    return response.data
  }

  public getBaseUri () : string {
    return process.env.REACT_APP_NYT_API_URI ?? '';
  }

  public getRestDefaultUri () :string {
    return this.getBaseUri()
  }
}

export default NytApiClient