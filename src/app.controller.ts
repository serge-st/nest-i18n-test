import { Controller, Get } from '@nestjs/common';
import { Headers } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { I18nTranslations } from './generated/i18n.generated';

@Controller()
export class AppController {
  constructor() {}

  @Get('greet')
  async getHello(@Headers() headers, @I18n() i18n: I18nContext<I18nTranslations>): Promise<string> {
    console.log(headers);
    console.log(i18n);
    return await i18n.t('main.GREETING');
  }

  @Get('goodbye')
  async getGoodbye(@Headers() headers, @I18n() i18n: I18nContext): Promise<string> {
    console.log(headers);
    console.log(i18n);
    return await i18n.t('main.GOODBYE');
  }
}
