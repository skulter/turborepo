interface HTTPInstance {
  get<T>(url: string, config?: RequestInit): Promise<T>;
  post<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
  //   delete<T>(url: string, config?: RequestInit): Promise<T>;
  //   head<T>(url: string, config?: RequestInit): Promise<T>;
  //   options<T>(url: string, config?: RequestInit): Promise<T>;
  //   put<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
  //   patch<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
}
interface HttpRequest {
  method: 'HEAD' | 'GET' | 'DELETE' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH';
  url: string;
  data?: unknown;
  config?: RequestInit;
}

class Service {
  public http: HTTPInstance;

  private baseURL: string;

  private headers: Record<string, string>;

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    this.headers = {};

    this.http = {
      get: this.get.bind(this),
      post: this.post.bind(this),
      //   delete: this.delete.bind(this),
      //   head: this.head.bind(this),
      //   options: this.options.bind(this),
      //   put: this.put.bind(this),
      //   patch: this.patch.bind(this),
    };
  }

  private async request<T = unknown>({ method, url, config, data }: HttpRequest): Promise<T> {
    try {
      const response: Response = await fetch(this.baseURL + url, {
        method,
        ...config,
      });
      if (!response.ok) {
        throw new Error(response.text.toString());
      }
      const responseData: T = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  }

  private get<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>({
      method: 'GET',
      url,
      config,
      data: undefined,
    });
  }
  private post<T>(url: string, data?: unknown, config?: RequestInit): Promise<T> {
    return this.request<T>({ method: 'POST', url, config, data });
  }

  //   private delete<T>(url: string, config?: RequestInit): Promise<T> {
  //     return this.request<T>('DELETE', url, undefined, config);
  //   }

  //   private head<T>(url: string, config?: RequestInit): Promise<T> {
  //     return this.request<T>('HEAD', url, undefined, config);
  //   }

  //   private options<T>(url: string, config?: RequestInit): Promise<T> {
  //     return this.request<T>('OPTIONS', url, undefined, config);
  //   }

  //   private put<T>(url: string, data?: unknown, config?: RequestInit): Promise<T> {
  //     return this.request<T>('PUT', url, data, config);
  //   }

  //   private patch<T>(url: string, data?: unknown, config?: RequestInit): Promise<T> {
  //     return this.request<T>('PATCH', url, data, config);
  //   }
}

export default Service;
