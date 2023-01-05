import { InputType, PartialType } from '@nestjs/graphql';
import { RestoreDocumentInput } from './restore-document.input';

@InputType()
export class DeleteDocumentInput extends PartialType(RestoreDocumentInput) {}
