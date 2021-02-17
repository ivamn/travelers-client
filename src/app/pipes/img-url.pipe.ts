import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imgUrl'
})
export class ImgUrlPipe implements PipeTransform {

  transform(value: string | undefined): string | undefined {
    if (value) {
      const baseUrl = environment.baseUrl.toLowerCase();
      const url = value.toLowerCase();
      if (!url.includes(baseUrl)) {
        return `${baseUrl}/images/${url}`;
      }
      return url;
    }
    return undefined;
  }

}
